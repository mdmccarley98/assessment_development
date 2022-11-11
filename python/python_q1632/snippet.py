import asyncio
import time


async def calculate():
    time.sleep(1)


def main():
    loop = asyncio.get_event_loop()
    tasks = []
    for _ in range(5):
        tasks.append(loop.create_task(calculate()))
    loop.run_until_complete(asyncio.wait(tasks))


if __name__ == '__main__':
    main()
