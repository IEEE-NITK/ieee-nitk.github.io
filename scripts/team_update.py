import gdown
import csv
import random
import json
import os
import glob

failed_downloads = []
core_positions = ['Convener', 'Chairperson', 'Vice Chairperson', 'Secretary', 'Joint Secretary', 'Treasurer(Branch)', 'Treasurer(Institute)', 'Webmaster', 'Media Lead', 'Outreach Lead', 'Envision Lead', 'Labs Lead', 'Project Head','Project Coordinator' ,'CompSoc Chair', 'CompSoc Vice Chair', 'CompSoc Secretary', 'Compsoc Project Head', 'Diode Chair', 'SPS Chair', 'SPS Vice Chair', 'SPS Secretary', 'CAS Chair', 'CAS Vice Chair', 'CAS Secretary', 'Piston Chair', 'Piston Vice Chair', 'Piston Secretary', 'Piston Project Head', 'SIGHT Chair', 'CIS Chair', 'CIS Secretary', 'CIS Project Head', 'IAS Chair', 'IAS Secretary', 'RAS Chair', 'RAS Secretary', 'WiE Chair']
files = glob.glob('../assets/img/core/*')
for f in files:
    os.remove(f)

csv_file = "../_data/sheets/IEEE NITK Executive Member Info 23-24 - Executive Member Info.csv"
img_csv = "../_data/sheets/Image For Core Poster (Responses) - Form Responses 1.csv"

core_mem = []

non_core_mem = []

with open(img_csv, newline='') as core_info:
    reader = csv.DictReader(core_info)
    for row in reader:
        for x in core_mem:
            if row['Name'].strip() == x['name']:
                print("\n\nfound\n\n")
                print("Deleting old image")
                os.remove('../assets/img/core/' + x['image'])
                core_mem.remove(x)
        row['name'] = ' '.join([x.capitalize() for x in  row.pop('Name').strip().split()])
        row['position'] = ' '.join([word[0].upper() + word[1:] for word in row.pop('Core Position').split()])
        url = row['Image'].replace('open', 'uc')
        rand_st = str(random.randint(0,100))
        output = '../assets/img/core/' + row['name'].split()[0] + rand_st + '.jpg'
        gdown.download(url, output, quiet=False)
        #wait until file is downloaded
        if os.path.exists(output):
            row.pop('Image')
            row['image'] = row['name'].split()[0] + rand_st + '.jpg'
            core_mem.append(row)

for x in core_mem:
    x.pop('Timestamp')

with open(csv_file, newline='') as ieee_info:
    reader = csv.DictReader(ieee_info)
    flag = 1
    for row in reader:
        row['name'] = ' '.join([x.capitalize() for x in  row.pop('Name').strip().split()])
        for x in core_mem:
            if x['name'] == row['name']:
                x['email'] = row['Personal Email']
                if 'email' not in x.keys():
                    x['email'] = row['NITK EDU Email']
                x['sig'] = row['SIG']
                x['github'] = row['GitHub Username']
                if x['github'].startswith('http'):
                    x['github'] = row['Gender']
                x['linkedin'] = row['LinkedIn Profile URL']
                break
        row['email'] = row.pop('Personal Email')
        if row['email'] == '':
            row['email'] = row.pop('NITK EDU Email')
        try:
            row.pop('NITK EDU Email')
        except:
            pass
        row['sig'] = row.pop('SIG')
        row['github'] = row.pop('GitHub Username')
        if row['github'].startswith('http'):
            row['github'] = row.pop('Gender')
        try:
            row.pop('Gender')
        except:
            pass
        row['linkedin'] = row.pop('LinkedIn Profile URL')
        row.pop('IEEE Email')
        row.pop('IEEE Membership Number')
        row.pop('Member Details Update Form')
        row.pop('Roll Number')
        row.pop('Registration Number')
        row.pop('Mobile Number')
        non_core_mem.append(row)


with open('../_data/team.json', 'r') as fin:
    data = json.load(fin)

# print all keys of data
print(data.keys())

prev_members = data['members']

prev_core = data['core']

alumni = data['alumni']

# all the prev_members that are not in non_core_mem are appended to alumni
for x in prev_members:
    flag = 0
    for y in non_core_mem:
        if x['linkedin'] == y['linkedin']:
            flag = 1
            break
    if flag == 0:
        # Append to the beggining of the list
        alumni.insert(0, x)

# sort core_mem according to core_positions
core_mem.sort(key=lambda x: core_positions.index(x['position'].strip()))

print("Alumni: ", alumni)

data['members'] = non_core_mem

data['core'] = core_mem

data['alumni'] = alumni



with open('../_data/team_new.json', 'w') as fout:
    json.dump(data, fout, indent=2)