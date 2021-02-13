package club.qlulxy.dao;

import club.qlulxy.domain.User;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

/**
 * @author ：李兴运
 * @date ：Created in 2021/2/13 15:36
 * @description：
 * @modified By：
 * @version:
 */
@Repository
public interface IUserDao {

    @Insert("insert into users(username,password,phoneNum,email,status) values(#{username},#{password},#{phoneNum},#{email},#{status})")
    void saveUser(club.qlulxy.domain.User user);


    @Select("select * from users where username = #{username}")
    User findUserByUsername(String username);
}
