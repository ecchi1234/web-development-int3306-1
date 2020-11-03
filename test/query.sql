select tengiaithuong
from giaithuong g
    join hoivien_giaithuong hg on g.magiaithuong = hg.magiaithuong
    join hoivien h on h.mahoivien = hg.mahoivien
where h.mahoivien = $mahoivien

select mahoivien, COUNT(*) as total
from hoivien_giaithuong hg
WHERE hg.ngayduocnhan BETWEEN $tungay AND $denngay
GROUP BY h.mahoivien
