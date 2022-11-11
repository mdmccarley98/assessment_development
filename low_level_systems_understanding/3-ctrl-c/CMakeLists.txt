cmake_minimum_required(VERSION 3.8)
project(ctrlc)

set(CMAKE_CXX_STANDARD 11)

add_executable(example example.cpp)


find_package(Curses REQUIRED)
add_executable(d1 d1.cpp)
target_include_directories(d1 PRIVATE ${CURSES_INCLUDE_DIR})
target_link_libraries(d1 ${CURSES_LIBRARIES})
