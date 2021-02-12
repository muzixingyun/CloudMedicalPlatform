package club.qlulxy.service.impl;

import club.qlulxy.dao.ITestDao;
import club.qlulxy.service.ITestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @author ：李兴运
 * @date ：Created in 2021/2/12 22:31
 * @description：
 * @modified By：
 * @version:
 */
@Service
public class TestServiceImpl implements ITestService {
    @Autowired
    private ITestDao testDao;

    public void findAll() {
        System.out.println("这里是业务层，可以正常工作");
        testDao.findAll();
    }
}
