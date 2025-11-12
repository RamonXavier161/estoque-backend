-- -----------------------------------------------------
-- Esquema: appaudazz
-- -----------------------------------------------------

-- Tabela: usuarios
CREATE TABLE `usuarios` (
  `cod` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(100) DEFAULT NULL,
  `senha` VARCHAR(100) DEFAULT NULL,
  `email` VARCHAR(45) DEFAULT NULL,
  `telefone` VARCHAR(45) DEFAULT NULL,
  PRIMARY KEY (`cod`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Tabela: materiais
CREATE TABLE `materiais` (
  `idmaterias` INT NOT NULL AUTO_INCREMENT,
  `material` TEXT,
  `marca` TEXT,
  `descricao` TEXT,
  `hrcad` VARCHAR(45) DEFAULT NULL,
  `dtcad` VARCHAR(45) DEFAULT NULL,
  `usucad` INT DEFAULT NULL,
  PRIMARY KEY (`idmaterias`),

) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
