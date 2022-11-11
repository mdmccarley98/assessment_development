class Button:
    def __init__(self, callback=None):
        self.callback = callback
    
    def on_click(self):
        if self.callback is not None:
            self.callback()

buttons = [Button(), Button(), Button()]
for i, button in enumerate(buttons):
    button.callback = lambda: print(f'Button {i} was clicked')

buttons[0].on_click()