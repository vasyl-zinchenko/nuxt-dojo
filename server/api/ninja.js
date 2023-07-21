export default defineEventHandler(async (event) => {
  // const { name } = getQuery(event);

  // const { age } = await readBody(event);

  const { data } = await $fetch(
    "https://api.currencyapi.com/v3/latest?apikey=cur_live_66ko0n8W4OpbgvueizE4v1SNMLk2W92Q7srw1tE6"
  );

  // return {
  //   message: `Hello, ${name}! You are ${age} years old`,
  // };

  return data;
});
