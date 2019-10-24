const PROPS = 0;

export function getElementRef(documentElement) {
  return Object.values(documentElement)[PROPS].ref;
}

export default getElementRef;
