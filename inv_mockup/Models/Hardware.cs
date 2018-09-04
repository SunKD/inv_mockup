using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace inv_mockup.Models
{
    public class Hardware
    {
        

        public int HardwareID { get; set; }
        public bool NewHardware { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int Quantity { get; set; }
        public float NewPrice { get; set; }
        public float ReclaimedPrice { get; set; }

    }
}
