import { useEffect } from "react";
import { connect } from "react-redux";
import { Table, Tag, Space } from 'antd';
import { showAllStudents } from "../actions/userActions";

const { Column, ColumnGroup } = Table;
function StudentList(props) {
    useEffect(() => {
        props.dispatch(showAllStudents());

    }, []);

    // const data = [
    //     {
    //         key: '1',
    //         firstName: 'John',
    //         lastName: 'Brown',
    //         age: 32,
    //         address: 'New York No. 1 Lake Park',
    //         tags: ['nice', 'developer'],
    //     },
    //     {
    //         key: '2',
    //         firstName: 'Jim',
    //         lastName: 'Green',
    //         age: 42,
    //         address: 'London No. 1 Lake Park',
    //         tags: ['loser'],
    //     },
    //     {
    //         key: '3',
    //         firstName: 'Joe',
    //         lastName: 'Black',
    //         age: 32,
    //         address: 'Sidney No. 1 Lake Park',
    //         tags: ['cool', 'teacher'],
    //     },
    // ];
    console.log("props ", props);
    let data = props.user.studentList.map((element, index) => {
        return {
            key: index,
            firstName: element.firstName,
            lastName: element.lastName,
            mobile: element.mob,
            userName: element.user.userName,
            email: element.user.email,
            tags: ["class-8", "pcm"]
        }
    });
    return (
        <div>

            <Table dataSource={data}>
                <Column title="First Name" dataIndex="firstName" key="firstName" />
                <Column title="Last Name" dataIndex="lastName" key="lastName" />

                <Column title="Mobile" dataIndex="mobile" key="mobile" />
                <Column title="Email" dataIndex="email" key="email" />
                <Column title="User Name" dataIndex="userName" key="userName" />
                <Column
                    title="Tags"
                    dataIndex="tags"
                    key="tags"
                    render={tags => (
                        <>
                            {tags.map(tag => (
                                <Tag color="blue" key={tag}>
                                    {tag}
                                </Tag>
                            ))}
                        </>
                    )}
                />
                <Column
                    title="Action"
                    key="action"
                    render={(text, record) => (
                        <Space size="middle">
                            <a>Invite {record.lastName}</a>
                            <a>Delete</a>
                        </Space>
                    )}
                />
            </Table>


        </div>
    )
}
const mapStateToProps = ({ user }) => ({
    user
});

export default connect(mapStateToProps)(StudentList);