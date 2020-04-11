using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace vo.models.core_models
{
    public class Department
    {
        [Key]
        public int DepartmentId { get; set; }
        public string Name { get; set; }
        public User HeadOfDepartment { get; set; }
        public List<Project> Projects { get; set; }
        [ForeignKey("CompanyId")]
        public int CompanyId { get; set; }
    }
}
