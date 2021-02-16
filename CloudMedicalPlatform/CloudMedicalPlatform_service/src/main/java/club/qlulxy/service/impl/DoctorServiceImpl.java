package club.qlulxy.service.impl;

import club.qlulxy.dao.IDepartmentDao;
import club.qlulxy.dao.IDoctorDao;
import club.qlulxy.dao.IUserDao;
import club.qlulxy.domain.Doctor;
import club.qlulxy.domain.User;
import club.qlulxy.service.IDoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

/**
 * @author ：李兴运
 * @date ：Created in 2021/2/16 17:28
 * @description：
 * @modified By：
 * @version:
 */
@Service
public class DoctorServiceImpl implements IDoctorService {
    @Autowired
    private IDoctorDao doctorDao;
    @Autowired
    private IDepartmentDao departmentDao;
    @Autowired
    private IUserDao userDao;

    //注入password加密类
    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    public void doctorJoin(Doctor doctor) throws Exception {
        User user = new User();
        user.setUsername(doctor.getDoctorName());
        user.setPassword(passwordEncoder.encode("123"));
        user.setStatus(1);
        userDao.saveUser(user);
        Integer departmentmentId =  departmentDao.seleceId(doctor.getDepartment());
        doctor.setDepartmentId(departmentmentId);
        doctorDao.doctorJoin(doctor);
    }
}
