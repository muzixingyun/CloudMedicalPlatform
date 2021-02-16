package club.qlulxy.domain;

/**
 * @author ：李兴运
 * @date ：Created in 2021/2/16 17:02
 * @description：
 * @modified By：
 * @version:
 */
public class Doctor {
    private String doctorName;
    private String province;
    private String city;
    private String county;
    private String hospital;
    private Integer departmentId;
    private String department;
    private String excel;
    private String certificateNo;

    public String getDoctorName() {
        return doctorName;
    }

    public void setDoctorName(String doctorName) {
        this.doctorName = doctorName;
    }

    public String getProvince() {
        return province;
    }

    public void setProvince(String province) {
        this.province = province;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getCounty() {
        return county;
    }

    public void setCounty(String county) {
        this.county = county;
    }

    public String getHospital() {
        return hospital;
    }

    public void setHospital(String hospital) {
        this.hospital = hospital;
    }

    public Integer getDepartmentId() {
        return departmentId;
    }

    public void setDepartmentId(Integer departmentId) {
        this.departmentId = departmentId;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public String getExcel() {
        return excel;
    }

    public void setExcel(String excel) {
        this.excel = excel;
    }

    public String getCertificateNo() {
        return certificateNo;
    }

    public void setCertificateNo(String certificateNo) {
        this.certificateNo = certificateNo;
    }

    @Override
    public String toString() {
        return "Doctor{" +
                "doctorName='" + doctorName + '\'' +
                ", province='" + province + '\'' +
                ", city='" + city + '\'' +
                ", county='" + county + '\'' +
                ", hospital='" + hospital + '\'' +
                ", departmentId=" + departmentId +
                ", department='" + department + '\'' +
                ", excel='" + excel + '\'' +
                ", certificateNo='" + certificateNo + '\'' +
                '}';
    }
}
