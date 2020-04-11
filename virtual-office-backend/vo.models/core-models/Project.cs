using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace vo.models.core_models
{
    public class Project
    {
        [Key]
        public int ProjectId { get; set; }
        public string Name { get; set; }
        public int CompanyId { get; set; }
        public User Manager { get; set; }
        public User ProjectLead { get; set; }
        public List<Bay> Bays { get; set; }
        [ForeignKey("DepartmentId")]
        public int DepartmentId { get; set; }
    }
}
