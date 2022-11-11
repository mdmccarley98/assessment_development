const example = () => {
  for (let i = 0; i < 8; i++) {
    const is_car = Number((i & 1) > 0);
    const has_spoiler = Number((i & 2) > 0);
    const is_lowered = Number((i & 4) > 0);

    const expr = Number(((!is_car && !has_spoiler) || (!is_car || !is_lowered)));
    const reducted = Number(!(is_car && is_lowered));

    console.log(is_lowered + " " + has_spoiler + " " + is_car + ": " + expr + " " + reducted);
  }
}