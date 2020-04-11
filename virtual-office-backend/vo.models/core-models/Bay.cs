using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace vo.models.core_models
{
    public class Bay
    {
        [Key]
        public int BayId { get; set; }
        public string Name { get; set; }
        public List<User> Users { get; set; }
        [ForeignKey("ProjectId")]
        public int ProjectId { get; set; }
    }
}
