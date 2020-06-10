import React, { Fragment } from "react";
import "antd/dist/antd.css";
import { Input, Button, List } from "antd";

// 无状态组件
const TodoListUI = (props) => {
  return (
    <Fragment>
      <div>
        <Input
          placeholder="输入..."
          style={{
            width: "300px",
            margin: "10px",
          }}
          value={props.inputValue}
          onChange={props.handleInputChange}
        ></Input>
        <Button type="primary" onClick={props.handleButtonClick}>
          提交
        </Button>
      </div>
      <List
        bordered
        style={{
          width: "300px",
          margin: "10px",
        }}
        dataSource={props.list}
        renderItem={(item, index) => (
          <List.Item
            onClick={() => {
              props.handleDeleteItem(index);
            }}
          >
            {item}
          </List.Item>
        )}
      />
    </Fragment>
  );
};

// class TodoListUI extends Component {
//   render() {
//     return (
//       <Fragment>
//         <div>
//           <Input
//             placeholder="输入..."
//             style={{
//               width: "300px",
//               margin: "10px",
//             }}
//             value={this.props.inputValue}
//             onChange={this.props.handleInputChange}
//           ></Input>
//           <Button type="primary" onClick={this.props.handleButtonClick}>
//             提交
//           </Button>
//         </div>
//         <List
//           bordered
//           style={{
//             width: "300px",
//             margin: "10px",
//           }}
//           dataSource={this.props.list}
//           renderItem={(item, index) => (
//             <List.Item
//               onClick={(index) => {
//                 this.props.handleDeleteItem(index);
//               }}
//             >
//               {item}
//             </List.Item>
//           )}
//         />
//       </Fragment>
//     );
//   }
// }

export default TodoListUI;
