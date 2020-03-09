let TodoModel = ({
    ID,
    LABEL,
    IS_COMPLETE = false,
    IS_DELETE = false
})=>({
    ID,
    LABEL,
    IS_COMPLETE,
    IS_DELETE
});

module.exports = TodoModel;