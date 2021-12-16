function BreadcrumbNav(props) {
    const newLocal = <div className="row">
        <div className="col-12">
            <div className="page-title-box">
                <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                        <li className="breadcrumb-item"><a href="#">SMS Gateway</a></li>
                        <li className="breadcrumb-item"><a href="#">{props.page}</a></li>

                    </ol>
                </div>
                <h4 className="page-title">{props.title}</h4>
            </div>
        </div>
    </div>;
    return (
            newLocal
    );
}
export default BreadcrumbNav;