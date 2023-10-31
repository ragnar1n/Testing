# Testjuht: Kontrollitakse Google.com otsingu toimimist
# Juhised: Juhised on valja toodud koodi sees kommentaaridena
# Oodatav tulemus: Google'i otsing annab sisestatud otsinguagendile vastavaid tulemusi

# Imporditakse vajalikud teegid
from selenium import webdriver
from selenium.webdriver.common.by import By
import time

# Testimiseks avatakse Firefox'i brauser
browser = webdriver.Firefox()

# Proovitakse jargnevat koodi:
try:
    # Brauseris avatakse 'google.com' lehekulg
    browser.get('https://www.google.com')
    
    # Otsitakse kupsistest keeldumise nupp ning vajutatakse seda
    cookies = browser.find_element(By.XPATH, '//*[@id="W0wltc"]/div')
    cookies.click()
    
    # Otsitakse Google'i otsing ning sisestatakse otsinguagent 'python'
    search = browser.find_element(By.XPATH, '//*[@id="APjFqb"]')
    search.send_keys('python')
    
    # Otsitakse otsingunupp ning vajutatakse seda
    button = browser.find_element(By.XPATH, '/html/body/div[1]/div[3]/form/div[1]/div[1]/div[4]/center/input[1]')
    button.click()
    
    # Eduka lopptulemuse korral valjastatakse vastav sonum:
    print('Test on edukas')
    
# Vea korral valjastatakse vastav sonum:
except:
    print('Viga')

# Parast viit sekundit suletakse brauser
time.sleep(5)
browser.quit()
