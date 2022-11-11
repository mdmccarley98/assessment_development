import asyncio
import time

async def calculate():
    await asyncio.sleep(1)

def main():
    start = time.time()

    loop = asyncio.get_event_loop()
    tasks = []
    for _ in range(5):
        tasks.append(loop.create_task(calculate()))
    loop.run_until_complete(asyncio.wait(tasks))

    end = time.time()
    print(f"Time: {end-start:.2f}")

if __name__ == '__main__':
    main()