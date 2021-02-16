package club.qlulxy.service;

import club.qlulxy.domain.User;
import org.springframework.security.core.userdetails.UserDetailsService;

/**
 * @author ：李兴运
 * @date ：Created in 2021/2/12 22:13
 * @description：
 * @modified By：
 * @version:
 */
public interface IUserService extends UserDetailsService{
    void saveUser(club.qlulxy.domain.User user);

    User checkRegist(String name) throws Exception;
}
