package club.qlulxy.service;

import club.qlulxy.domain.Disease; /**
 * @author ：李兴运
 * @date ：Created in 2021/2/15 15:20
 * @description：
 * @modified By：
 * @version:
 */
public interface IDiseaseService {
    void save(Disease disease, String departmentName) throws Exception;
}
