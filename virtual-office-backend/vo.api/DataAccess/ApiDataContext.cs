using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using vo.models.core_models;

namespace vo.api.DataAccess
{
    public class ApiDataContext : DbContext
    {
        protected readonly IConfiguration Configuration;
        public ApiDataContext(DbContextOptions<ApiDataContext> options)
            : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Bay> Bays { get; set; }
        public DbSet<Project> Projects { get; set; }
        public DbSet<Department> Departments { get; set; }
        public DbSet<Company> Companies { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Company>().HasMany(p => p.Departments);
            //modelBuilder.Entity<Department>().Proper(p=>p.company).WithMany(p=>p.Departments).HasForeignKey(p=>p.company);
            //modelBuilder.Entity<Project>().HasOne(p => p.Department).WithMany(p => p.Projects).HasForeignKey(p=>p.Department);
            //modelBuilder.Entity<Bay>().HasOne(p => p.Project).WithMany(p => p.Bays).HasForeignKey(p=>p.Project);

            modelBuilder.Entity<Department>().HasMany(p => p.Projects);
            modelBuilder.Entity<Project>().HasMany(p => p.Bays);
            modelBuilder.Entity<Bay>().HasMany(p => p.Users);

            modelBuilder.Entity<User>().HasIndex(p => p.EmailId).IsUnique();
            modelBuilder.Entity<User>().HasIndex(p => p.PhoneNumber).IsUnique();
            modelBuilder.Entity<Company>().HasIndex(p => p.Name).IsUnique();
            modelBuilder.Entity<Company>().HasIndex(p => p.EmailId).IsUnique();
            modelBuilder.Entity<Company>().HasIndex(p => p.PhoneNumber).IsUnique();

            //modelBuilder.Entity<User>().HasOne(p => p.Bay).WithMany(p => p.Users).HasForeignKey(p => p.Bay);
            modelBuilder.Entity<Company>().HasOne(p => p.Admin);
            modelBuilder.Entity<Department>().HasOne(p => p.HeadOfDepartment);
            modelBuilder.Entity<Project>().HasOne(p => p.ProjectLead);
            modelBuilder.Entity<Project>().HasOne(p => p.Manager);

        }
    }
}
