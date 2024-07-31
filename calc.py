

class CalculatePart:

    def __init__(self):
        self.total_shelves = 0
        self.total_doors = 0
        self.total_columns = 0
        self.block_list = []

    def get_parts(self):
        return {
            "total_shelves": self.total_shelves,
            "total_doors": self.total_doors,
            "total_columns": self.total_columns
        }
    
    def reset_parts(self):
        self.total_shelves = 0
        self.total_doors = 0
        self.total_columns = 0

    def add_block(self, block:list):
        self.total_shelves += self._count_shelves(block)
        self.total_doors += self._count_door(block)
        self.total_columns += self._count_column(block)
        self.block_list.append(block)
        return None

    def _count_shelves(self, block:list)-> int:
        x, z, y = block
        if [x, z-1, y] in self.block_list:
            return 1
        else:
            return 2
        
    def _count_door(self, block:list)-> int:
        x, z, y = block
        check_list = [
            [x+1, z, y],
            [x, z, y+1],
            [x-1, z, y],
            [x, z, y-1]
        ]
        door = [int(target not in self.block_list) for target in check_list]
        return sum(door)
    
    def _count_column(self, block:list)-> int:
        x, z, y = block
        check_list = [
            [[x-1, z, y-1], [x, z, y+1], [x-1, z, y]],
            [[x, z, y+1], [x+1, z, y+1], [x+1, z, y]],
            [[x-1, z, y], [x-1, z, y-1], [x, z, y-1]],
            [[x+1, z, y], [x+1, z, y-1], [x, z, y-1]]
        ]

        result = [all([loc not in self.block_list for loc in locs]) for locs in check_list]
        return sum(result)

