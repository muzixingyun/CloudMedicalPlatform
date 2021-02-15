package club.qlulxy.domain;

/**
 * @author ：李兴运
 * @date ：Created in 2021/2/14 15:33
 * @description：
 * @modified By：
 * @version:
 */
public class Disease {

    private int id;
    private String diseaseName;
    private String reason;
    private String symptom;
    private String treatment;
    private String prevention;
    private Department department;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getDiseaseName() {
        return diseaseName;
    }

    public void setDiseaseName(String diseaseName) {
        this.diseaseName = diseaseName;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public String getSymptom() {
        return symptom;
    }

    public void setSymptom(String symptom) {
        this.symptom = symptom;
    }

    public String getTreatment() {
        return treatment;
    }

    public void setTreatment(String treatment) {
        this.treatment = treatment;
    }

    public String getPrevention() {
        return prevention;
    }

    public void setPrevention(String prevention) {
        this.prevention = prevention;
    }

    public Department getDepartment() {
        return department;
    }

    public void setDepartment(Department department) {
        this.department = department;
    }

    @Override
    public String toString() {
        return "Disease{" +
                "id=" + id +
                ", diseaseName='" + diseaseName + '\'' +
                ", reason='" + reason + '\'' +
                ", symptom='" + symptom + '\'' +
                ", treatment='" + treatment + '\'' +
                ", prevention='" + prevention + '\'' +
                ", department=" + department +
                '}';
    }
}
