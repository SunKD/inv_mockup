using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace inv_mockup.Models
{
    public class invDatabaseContext : DbContext
    {
        public invDatabaseContext(DbContextOptions<invDatabaseContext> options)
            : base(options)
        { }

        public DbSet<User> Users { get; set; }
        public DbSet<Hardware> Hardware { get; set; }
        public DbSet<Category> Categories { get; set; }
    }
}
