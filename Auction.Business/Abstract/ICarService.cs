﻿using FinalAspReactAuction.Server.Entities;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Auction.Business.Abstract
{
    public interface ICarService
    {
        Task<List<Car>> GetAllAsync();
        Task<List<Car>> GetAllByMakeId(int makeId);
        Task<List<Car>> GetAllByModelId(int modelId);
        Task<Car> GetByIdAsync(int id);
        Task AddAsync(Car car);
        Task UpdateAsync(Car car);
        Task DeleteAsync(int id);
    }
}
