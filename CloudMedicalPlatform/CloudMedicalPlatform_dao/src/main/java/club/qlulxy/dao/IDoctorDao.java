package club.qlulxy.dao;

import club.qlulxy.domain.Doctor;
import org.apache.ibatis.annotations.Insert;
import org.springframework.stereotype.Repository;

/**
 * @author ：李兴运
 * @date ：Created in 2021/2/16 17:28
 * @description：
 * @modified By：
 * @version:
 */
@Repository
public interface IDoctorDao {

    @Insert("insert into doctors(doctorName,province,city,county,hospital,excel,certificateNo,departmentId)" +
            "values(#{doctorName},#{province},#{city},#{county},#{hospital},#{excel},#{certificateNo},#{departmentId})")
    void doctorJoin(Doctor doctor) throws Exception;
}
