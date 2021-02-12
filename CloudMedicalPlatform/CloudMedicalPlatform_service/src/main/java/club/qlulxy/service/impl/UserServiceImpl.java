package club.qlulxy.service.impl;

import club.qlulxy.service.IUserService;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

/**
 * @author ：李兴运
 * @date ：Created in 2021/2/12 22:13
 * @description：
 * @modified By：
 * @version:
 */
@Service("userService")
public class UserServiceImpl implements IUserService {
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return null;
    }
}
