export const findElementByDataTestAttr = (wrapper, dataTestValue) => {
  return wrapper.find(`[data-test="${dataTestValue}"]`);
};

export const checkProperties = (component, modelProps) => {
  const propError = checkPropTypes (
    component.propTypes,
    modelProps,
    'prop',
    component.name
  );
  expect(propError).toBeUndefined();
};