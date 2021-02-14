package club.qlulxy.domain;

import java.util.List;

/**
 * @author ：李兴运
 * @date ：Created in 2021/2/14 15:35
 * @description：
 * @modified By：
 * @version:
 */
public class Department {
    private int id;
    private String partName;
    List<Disease> diseaseList;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getPartName() {
        return partName;
    }

    public void setPartName(String partName) {
        this.partName = partName;
    }

    public List<Disease> getDiseaseList() {
        return diseaseList;
    }

    public void setDiseaseList(List<Disease> diseaseList) {
        this.diseaseList = diseaseList;
    }
}
