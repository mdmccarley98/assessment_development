cmake_minimum_required(VERSION 3.8)
project(3_std_async)

set(CMAKE_CXX_STANDARD 11)

find_package(Threads)

add_executable(example example.cpp)
target_link_libraries(example Threads::Threads)

add_executable(key key.cpp)
target_link_libraries(key Threads::Threads)

add_executable(distractor1 distractor1.cpp)
target_link_libraries(distractor1 Threads::Threads)

add_executable(distractor2 distractor2.cpp)
target_link_libraries(distractor2 Threads::Threads)

add_executable(distractor3 distractor3.cpp)
target_link_libraries(distractor3 Threads::Threads)

