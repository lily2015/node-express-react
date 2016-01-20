var BoxOfficeDateChoose = React.createClass({
  render: function (){
    return (
      <div className="container_box">
        <ul className="date">
          <li className="pre_day">
            <p className="btn_pre">12-22</p>
          </li>
          <li className="now_day">
            <p className="btn_now">2015-12-23</p>
            <div className="img_now"></div>
            <p className="time_yet">上次更新时间 11:30</p>
          </li>
          <li className="next_day">
            <p className="btn_next remove-after">12-24</p>
            <div className="img_next"></div>
          </li>
        </ul>
      </div>
    );
  }
});