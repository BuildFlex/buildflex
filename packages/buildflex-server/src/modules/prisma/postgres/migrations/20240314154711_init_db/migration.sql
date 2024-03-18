-- CreateTable
CREATE TABLE "Table" (
    "tableId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "frozenColumnId" TEXT,
    "primaryColumnId" TEXT,
    "updatedAt" TIMESTAMP(6),
    "createdAt" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Table_pkey" PRIMARY KEY ("tableId")
);

-- CreateTable
CREATE TABLE "Column" (
    "columnId" TEXT NOT NULL,
    "tableId" TEXT NOT NULL,
    "type" INTEGER NOT NULL,
    "isHide" BOOLEAN NOT NULL DEFAULT false,
    "order" INTEGER NOT NULL,
    "description" TEXT,
    "updatedAt" TIMESTAMP(6),
    "createdAt" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Column_pkey" PRIMARY KEY ("columnId")
);

-- CreateTable
CREATE TABLE "Row" (
    "rowId" TEXT NOT NULL,
    "tableId" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "updatedAt" TIMESTAMP(6),
    "createdAt" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Row_pkey" PRIMARY KEY ("rowId")
);

-- CreateTable
CREATE TABLE "Cell" (
    "cellId" TEXT NOT NULL,
    "columnId" TEXT NOT NULL,
    "rowId" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(6),
    "createdAt" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Cell_pkey" PRIMARY KEY ("cellId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Table_tableId_key" ON "Table"("tableId");

-- CreateIndex
CREATE UNIQUE INDEX "Column_columnId_key" ON "Column"("columnId");

-- CreateIndex
CREATE UNIQUE INDEX "Row_rowId_key" ON "Row"("rowId");

-- CreateIndex
CREATE UNIQUE INDEX "Cell_cellId_key" ON "Cell"("cellId");

-- CreateIndex
CREATE INDEX "cell_column_index" ON "Cell"("cellId", "columnId");

-- CreateIndex
CREATE UNIQUE INDEX "Cell_cellId_columnId_key" ON "Cell"("cellId", "columnId");

-- AddForeignKey
ALTER TABLE "Column" ADD CONSTRAINT "Column_tableId_fkey" FOREIGN KEY ("tableId") REFERENCES "Table"("tableId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Row" ADD CONSTRAINT "Row_tableId_fkey" FOREIGN KEY ("tableId") REFERENCES "Table"("tableId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cell" ADD CONSTRAINT "Cell_columnId_fkey" FOREIGN KEY ("columnId") REFERENCES "Column"("columnId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cell" ADD CONSTRAINT "Cell_rowId_fkey" FOREIGN KEY ("rowId") REFERENCES "Row"("rowId") ON DELETE RESTRICT ON UPDATE CASCADE;
