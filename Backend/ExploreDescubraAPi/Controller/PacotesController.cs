using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ExploreDescubraAPi.Context;
using ExploreDescubraAPi.Models;

namespace ExploreDescubraAPi.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class PacotesController : ControllerBase
    {
        private readonly DataContext _context;

        public PacotesController(DataContext context)
        {
            _context = context;
        }

        // GET: api/Destinos
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Pacotes>>> GetPacotes()
        {
            return await _context.Pacotes.ToListAsync();
        }

        // GET: api/Pacotes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Pacotes>> GetDestinos(int id)
        {
            var Pacotes = await _context.Pacotes.FindAsync(id);

            if (Pacotes == null)
            {
                return NotFound();
            }

            return Pacotes;
        }

        // PUT: api/Pacotes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPacotes(int id, Pacotes pacotes)
        {
            if (id != pacotes.Id)
            {
                return BadRequest();
            }

            _context.Entry(pacotes).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PacotesExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Destinos
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Pacotes>> PostDestinos(Pacotes pacotes)
        {
            _context.Pacotes.Add(pacotes);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPacotes", new { id = pacotes.Id }, pacotes);
        }

        // DELETE: api/Pacotes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePacotes(int id)
        {
            var pacotes = await _context.Pacotes.FindAsync(id);
            if (pacotes == null)
            {
                return NotFound();
            }

            _context.Pacotes.Remove(pacotes);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PacotesExists(int id)
        {
            return _context.Pacotes.Any(e => e.Id == id);
        }
    }
}