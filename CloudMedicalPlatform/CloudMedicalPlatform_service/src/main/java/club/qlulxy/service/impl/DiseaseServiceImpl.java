package club.qlulxy.service.impl;

import club.qlulxy.dao.IDepartmentDao;
import club.qlulxy.dao.IDiseaseDao;
import club.qlulxy.domain.Disease;
import club.qlulxy.service.IDiseaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * @author ：李兴运
 * @date ：Created in 2021/2/15 15:21
 * @description：
 * @modified By：
 * @version:
 */
@Service
@Transactional
public class DiseaseServiceImpl implements IDiseaseService {
    @Autowired
    private IDiseaseDao diseaseDao;
    @Autowired
    private IDepartmentDao departmentDao;

    public void save(Disease disease, String departmentName) throws Exception {
        Integer departmentId = departmentDao.seleceId(departmentName);
        diseaseDao.save(disease,departmentId);
    }
}
