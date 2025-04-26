const CURRENCy_FORMATTER = new Intl.NumberFormat(undefined, {
    currency: 'USD',
    style: 'currency',

})

const formatCurrency = (number) => {
    return CURRENCy_FORMATTER.format(number)
}

export default formatCurrency