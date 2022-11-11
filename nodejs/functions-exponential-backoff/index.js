

const randomlyFail = (resolve, reject) => Math.random() < 0.8 ? reject() : resolve();
const apiCall = () => new Promise((...args) => setTimeout(() => randomlyFail(...args), 1000));
const delay = retryCount => new Promise(resolve => setTimeout(resolve, 10 ** retryCount));

const getResource = async (retryCount = 0, lastError = null) => {
  if (retryCount > 5) throw new Error(lastError);

  try {
    return apiCall();
  } catch (e) {
    await delay(retryCount);
    return getResource(retryCount + 1, e);
  }
};
