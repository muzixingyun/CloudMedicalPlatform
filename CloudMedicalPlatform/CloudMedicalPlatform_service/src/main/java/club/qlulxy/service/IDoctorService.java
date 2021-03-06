package club.qlulxy.service;

import club.qlulxy.domain.Doctor;

import java.util.List;

/**
 * @author ：李兴运
 * @date ：Created in 2021/2/16 17:27
 * @description：
 * @modified By：
 * @version:
 */
public interface IDoctorService {
    void doctorJoin(Doctor doctor) throws Exception;

    List<Doctor> findAll() throws Exception;
}
