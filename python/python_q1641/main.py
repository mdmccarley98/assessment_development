"""Test"""


class Item:
    """item available for purchase"""
    price = 0


class Cart:
    """cart containing many items"""
    total = 0

    def add_item(self, item: Item) -> int:
        self.total += item.price
        return self.total


if __name__ == "__main__":
    hat = Item()
    hat.price = 15

    basket = Cart()
    total = basket.add_item(4)

    print(total)
