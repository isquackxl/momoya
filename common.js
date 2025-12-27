const store = localStorage;

// getter
const getValue  = (key) => {
    const valueMap = JSON.parse(store.getItem('momoya_value_map')) || {};
    return valueMap[key];
};

// setter
const saveValue = (key, value) => {
    const valueMap = JSON.parse(store.getItem('momoya_value_map')) || {};
    valueMap[key] = value;
    store.setItem('momoya_value_map', JSON.stringify(valueMap));
};