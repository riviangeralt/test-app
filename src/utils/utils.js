export const isSuccessStatus = (obj) => {
  return [200, 201, 202, 204].includes(obj.status);
};

export const extractValue = (obj) => {
  // input {name:"test", value:"test", select: {label:"test", value:"test"}}
  // output {name:"test", value:"test", select: "test"}

  const formattedObj = Object.entries(filterFalsyValues(obj)).reduce(
    (acc, [key, value]) => {
      if (typeof value === "object" && !Array.isArray(value)) {
        acc[key] = value.value;
      } else {
        acc[key] = value;
      }
      return acc;
    },
    {}
  );

  return formattedObj;
};

export const getQueryParamString = (obj) => {
  return new URLSearchParams(obj).toString();
};

export const dateFormatter = (date) => {
  if (!date) return;
  // format will be YYYY-MM-DD
  const newDate = new Date(date);
  return `${newDate.getFullYear()}-${(newDate.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${newDate.getDate().toString().padStart(2, "0")}`;
};

export const getPreviousDay = (date = new Date()) => {
  const previous = new Date(date.getTime());
  previous.setDate(date.getDate() - 1);
  return previous;
};

export const numberWithCommas = (num) => {
  if (!num) return 0;
  if (Number(num)) {
    return Number(num).toLocaleString("en-IN", {
      maximumFractionDigits: 2,
      // style: "currency",
    });
  }
};

export const formatObjPayload = (obj) => {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    if (typeof value === "object" && !Array.isArray(value)) {
      acc[key] = value?.value;
    } else {
      acc[key] = value;
    }
    return acc;
  }, {});
};

export const filterFalsyValues = (obj) => {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    if (value) {
      acc[key] = value;
    }
    return acc;
  }, {});
};

export const checkUserType = (expected) => {
  const userType = localStorage.getItem("io_ut");
  return userType === expected;
};
