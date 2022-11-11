FROM one
RUN mkdir f && echo "apple" > f/food.txt
FROM two
RUN mkdir f && echo "pear" > f/food.txt
FROM three
RUN mkdir f && echo "orange" > f/food.txt
COPY --from=0 f .
CMD ["cat", "food.txt"]
