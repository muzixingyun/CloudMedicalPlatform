package club.qlulxy.service.impl;

import club.qlulxy.dao.IUserDao;
import club.qlulxy.domain.User;
import club.qlulxy.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

/**
 * @author ：李兴运
 * @date ：Created in 2021/2/12 22:13
 * @description：
 * @modified By：
 * @version:
 */
@Service("userService")
@Transactional
public class UserServiceImpl implements IUserService {
    @Autowired
    private IUserDao userDao;
    //注入password加密类
    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User userFromDataSource = userDao.findUserByUsername(username);
        org.springframework.security.core.userdetails.User user = new org.springframework.security.core.userdetails.User(
                userFromDataSource.getUsername(),
                userFromDataSource.getPassword(),
                userFromDataSource.getStatus() == 0 ? false : true,
                true,
                true,
                true,
                getAuthority());
        return user;
    }

    public List<SimpleGrantedAuthority> getAuthority() {
        List<SimpleGrantedAuthority> list = new ArrayList<SimpleGrantedAuthority>();
        list.add(new SimpleGrantedAuthority("ROLE_USER"));
        list.add(new SimpleGrantedAuthority("ROLE_ADMIN"));
        return list;
    }

    public void saveUser(club.qlulxy.domain.User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        if (user.getStatus() == null) {
            user.setStatus(1);
        }
        userDao.saveUser(user);
    }

    public User checkRegist(String name) throws Exception {
        return userDao.findUserByUsername(name);
    }
}
