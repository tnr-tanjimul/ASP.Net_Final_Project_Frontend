function AlertSuccess(props) {
    return (
        <div className="alert alert-success alert-dismissible">
            <button type="button" className="close" data-dismiss="alert">×</button>
            <strong>Success!</strong> {props.msg}
        </div>
    )
}

export default AlertSuccess;