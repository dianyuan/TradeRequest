export const SelectType = (TRType) => {
  alert(JSON.stringify(TRType));
  return {
    type: "TYPE_SELECTED",
    payload: TRType,
  }
}