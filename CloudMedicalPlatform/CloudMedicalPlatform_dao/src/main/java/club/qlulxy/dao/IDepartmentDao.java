package club.qlulxy.dao;

import club.qlulxy.domain.Department;
import club.qlulxy.domain.Disease;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @author ：李兴运
 * @date ：Created in 2021/2/14 15:38
 * @description：
 * @modified By：
 * @version:
 */
@Repository
public interface IDepartmentDao {
    @Select("select * from diseases where departmentId = (select id from department where partName = #{departmentName})")
    List<Disease> findAllDiseaseByDepartmentName(String departmentName);

    @Select("select * from department")
    List<Department> findAll();

    @Select("select id from department where partName=#{departmentName}")
    Integer seleceId(String departmentName);
}
