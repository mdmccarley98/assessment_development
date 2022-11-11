from numpy import log, exp
from scipy.special import logsumexp

if __name__ == '__main__':
    x = log([1,2,3])

    print('Naive (correct) version:', exp(x) / exp(x).sum())
    print('Answer exp(x - logsumexp(x))', exp(x - logsumexp(x)))
    print('D1 logsumexp(exp(x))', logsumexp(exp(x)))
    print('D2 logsumexp(x) - exp(x)', logsumexp(x) - exp(x))
    print('D3 exp(logsumexp(x))', exp(logsumexp(x)))