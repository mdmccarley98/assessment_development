using System;

namespace Example
{

    struct Account {
        decimal _Balance;

        public decimal Balance {
            get => _Balance;
            set {
                if (value < 0.0m) {
                    throw new ArgumentOutOfRangeException("Balance", "Account cannot have a negative balance.");
                }
                _Balance = value;
            }
        }

        public void Deposit(decimal amount) {
            Balance += amount;
        }

        public bool Withdraw(decimal amount) {
            if (Balance - amount < 0.0m) {
                return false;
            }
            Balance -= amount;
            return true;
        }
    }

    class Program
    {

        static void Main(string[] args)
        {
            Is_BalanceAccessable();
            DoesInitializeWithNegativeWork();
            DoesWithdraw0Work();
            DoesWithdrawNegative0Work();
            DoesWithdrawTooMuchWork();
            DoesWithdrawNegativeWork();
            DoesDepositNegativeWork();
            DoesEvilRefWork();
        }

        static void Is_BalanceAccessable() {
            var account = new Account();
            //account._Balance = -50.0m; // CS0122: 'Account._Balance' is inaccessible
        }

        static void DoesInitializeWithNegativeWork() {
            //var account = new Account { _Balance = -50.0m }; // CS0122: 'Account._Balance' is inaccessible
        }

        static void DoesWithdrawTooMuchWork() {
            var account = new Account();
            var changed = account.Withdraw(50.0m);  // doesn't do anything
            Console.WriteLine($"Does Withdraw Too Much Work? changed: {changed}");
            Console.WriteLine($"Balance {account.Balance}");
        }

        static void DoesWithdraw0Work() {
            var account = new Account();
            var changed = account.Withdraw(0.0m);
            Console.WriteLine($"Does Withdraw 0 work? changed: {changed}");
            Console.WriteLine($"Balance {account.Balance}");
        }

        static void DoesWithdrawNegative0Work() {
            var account = new Account();
            var changed = account.Withdraw(-0.0m);  // still doesn't do anything
            Console.WriteLine($"Does Withdraw -0 work? changed: {changed}");
            Console.WriteLine($"Balance {account.Balance}");
        }

        static void DoesWithdrawNegativeWork() {
            var account = new Account();
            var changed = account.Withdraw(-50.0m);  // subtracting a negative makes a positive
            Console.WriteLine($"Does Withdraw Negative Work? changed: {changed}");
            Console.WriteLine($"Balance {account.Balance}");
        }

        static void DoesDepositNegativeWork() {
            var account = new Account();
            //account.Deposit(-50.00m); // System.ArgumentOutOfRangeException: Account cannot have a negative balance. (Parameter 'Balance')
        }

        static void Evil(ref decimal balance) {
            balance = -50.0m;
        }
        static void DoesEvilRefWork()
        {
            var account = new Account();
            //Evil(ref account.Balance); // error CS0206: A property or indexer may not be passed as an out or ref parameter
        }
    }
}
