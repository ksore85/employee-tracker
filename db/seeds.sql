INSERT INTO departments (dept_name)
VALUES
    ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Legal');

INSERT INTO roles (job_title, salary,  department_id)
VALUES
    ('Sales Lead', 150000.00, 1),
    ('Salesperson', 50000.00, 1),
    ('Lead Engineer', 230000.00, 2),
    ('Software Engineer', 530000.00, 2),
    ('Accountant', 150000.00, 3),
    ('Finance Officer', 75000.00, 3),
    ('Lawyer', 300000.00, 4),
    ('Legal Assistant', 60000.00, 4);

INSERT INTO employees (first_name, last_name, job_title_id, manager_id)
VALUES
    ('Helen', 'Hunt', 1),
    ('Kelly', 'Kapowski', 8),
    ('AC', 'Slater', 7),
    ('Samuel', 'Powers', 2),
    ('Zach', 'Morris', 2),
    ('Jessie', 'Spano', 2),
    ('Merv', 'Griffin', 1),
    ('Wesley', 'Snipes', 3),
    ('Adam', 'Sandy', 3),
    ('Rachel', 'McMurray', 4),
    ('Bradley', 'Spitt', 4),
    ('Georgio', 'Clooney', 5),
    ('Michael', 'Scott', 8),
    ('Billy', 'Paxton', 5),
    ('David', 'Matthews', 7),
    ('Carter', 'Beauford', 8),
    ('Tim', 'Reynolds', 6),
    ('Stefan', 'Lessard', 3),
    ('Boyd', 'Tinsley', 2),
    ('Bart', 'Simpson', 6),
    ('Goose', 'Gossitch', 3),
    ('Thomas', 'Cruise', 2);