function AlertError(props) {
    return (
        <div className="alert alert-danger alert-dismissible">
            <button type="button" className="close" data-dismiss="alert">×</button>
            <strong>Error!</strong> {props.msg}
        </div>
    )
}

export default AlertError;