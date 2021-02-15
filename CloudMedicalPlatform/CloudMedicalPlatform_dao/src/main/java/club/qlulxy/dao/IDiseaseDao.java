package club.qlulxy.dao;

import club.qlulxy.domain.Disease;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

/**
 * @author ：李兴运
 * @date ：Created in 2021/2/15 15:21
 * @description：
 * @modified By：
 * @version:
 */
@Repository
public interface IDiseaseDao {
    @Insert("insert into diseases(diseaseName,reason,symptom,treatment,prevention,departmentId) values(#{disease.diseaseName},#{disease.reason},#{disease.symptom},#{disease.treatment},#{disease.prevention},#{departmentId})")
    void save(@Param("disease") Disease disease, @Param("departmentId") Integer departmentId);
}
